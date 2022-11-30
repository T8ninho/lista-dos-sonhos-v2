export function auth() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'asdasdjkajnsdkaskdaksdaksdjkasjdajsdkajsdsasd',
                user: {
                    name: 'Nome Teste',
                    email: 'teste@gmail.com',
                },
            });
        }, 2000);
    });
}