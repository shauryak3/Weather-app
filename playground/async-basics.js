var getUser = (id , callback) => {
    var user = {
        id : 1,
        name: 'Shaurya'
    };
    setTimeout(()=> {
        callback(user)}
        ,3000);
};

getUser(1 , (user) => {
    console.log(user);
})