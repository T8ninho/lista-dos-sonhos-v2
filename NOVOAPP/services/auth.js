export function auth() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'asdasdjkajnsdkaskdaksdaksdjkasjdajsdkajsdsasd',
                user: {
                    name: 'Antonio Vitor',
                    email: 't8ninho@gmail.com',
                },
            });
        }, 2000);
    });
}