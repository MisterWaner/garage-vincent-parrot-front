const formatPhoneNumber = (phoneNumber) => {
    return phoneNumber.match(/.{1,2}/g).join("-");
};

export default formatPhoneNumber;
