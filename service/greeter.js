const buildMessage = (name, city) => {
    let message;
    
    if (name) {
        message = `Hi ${name}`;
        
        if (city) {
            message += ` from ${city}`;
        }
    
    } else if (city) {
        message = `Good evening ${city}`;

    } else {
        message = `Hello world`;
    }

    return message;
}

module.exports = { buildMessage };
