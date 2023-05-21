export const sendContactForm = async (data) => {

    return await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    }).catch(error => {
        console.log(error)
    });
}

export const sendCardContactForm = async (data) => {

    return await fetch("/api/cardContact", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        }
    }).catch(error => {
        console.log(error)
    });
}
