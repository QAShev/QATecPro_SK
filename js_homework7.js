var arr = [
    {
        userName:"John",
        lastName:"Doe",
        email:"john.doe@gmail.com"
    },
    {
        userName:"Annabel",
        lastName:"Scary",
        email:"annabel.s@yahoo.com"
    },
    {
        userName:"123",
        lastName:"",
        email:"123@mail.ru" 
    },
     {
        userName:"123",
        lastName:"",
        email:"123@mail.ru" 
    },
     {
        userName:"Wrong",
        lastName:"Outlook",
        email:"wrong@outlook.com" 
    },
     {
        userName:"in..valid",
        lastName:"1",
        email:"in..valid@gmail.com" 
    },
    
];

const trustedEmails = arr.filter(item => 
  /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)?@(gmail|yahoo)\.com$/.test(item.email)
);

console.log(trustedEmails);