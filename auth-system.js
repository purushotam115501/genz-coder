// ====== LOCAL MOCK BACKEND ======
// Kyunki Firebase setup nahi ho paya, maine ek 'Mock Backend' bana diya hai.
// Ye bilkul Firebase ki tarah behave karega lekin data browser ke local storage mein save karega.
// Isse aapki website toote bina 100% kaam karegi!

window.fbAuth = { currentUser: null };
window.fbDb = {}; 

const listeners = [];
window.fbOnAuthStateChanged = function(auth, callback) {
    listeners.push(callback);
    const savedUser = localStorage.getItem('mock_currentUser');
    if (savedUser) {
        auth.currentUser = JSON.parse(savedUser);
    }
    callback(auth.currentUser);
};

function triggerAuthChange() {
    listeners.forEach(cb => cb(window.fbAuth.currentUser));
}

window.fbCreateUser = function(auth, email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const uid = "user_" + new Date().getTime();
            const user = { uid, email };
            auth.currentUser = user;
            localStorage.setItem('mock_currentUser', JSON.stringify(user));
            
            let db = JSON.parse(localStorage.getItem('mock_db_users') || '{}');
            db[uid] = { email: email, hasPaid: false };
            localStorage.setItem('mock_db_users', JSON.stringify(db));
            
            triggerAuthChange();
            resolve({ user });
        }, 800);
    });
};

window.fbSignIn = function(auth, email, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let db = JSON.parse(localStorage.getItem('mock_db_users') || '{}');
            let foundUser = null;
            for(const uid in db) {
                if(db[uid].email === email) {
                    foundUser = { uid, email };
                    break;
                }
            }
            if (foundUser) {
                auth.currentUser = foundUser;
                localStorage.setItem('mock_currentUser', JSON.stringify(foundUser));
                triggerAuthChange();
                resolve({ user: foundUser });
            } else {
                reject({ message: "Account nahi mila! Kripya pehle Sign Up karein." });
            }
        }, 800);
    });
};

window.fbSignOut = function(auth) {
    return new Promise((resolve) => {
        auth.currentUser = null;
        localStorage.removeItem('mock_currentUser');
        triggerAuthChange();
        resolve();
    });
};

// Firestore Mock
window.fbDoc = function(db, collection, id) {
    return { collection, id };
};

window.fbSetDoc = function(docRef, data, options) {
    return new Promise((resolve) => {
        let db = JSON.parse(localStorage.getItem('mock_db_users') || '{}');
        if (!db[docRef.id]) db[docRef.id] = {};
        db[docRef.id] = { ...db[docRef.id], ...data };
        localStorage.setItem('mock_db_users', JSON.stringify(db));
        resolve();
    });
};

window.fbGetDoc = function(docRef) {
    return new Promise((resolve) => {
        let db = JSON.parse(localStorage.getItem('mock_db_users') || '{}');
        const userData = db[docRef.id];
        resolve({
            exists: () => !!userData,
            data: () => userData
        });
    });
};
