export const generalValidator = (value) => {
  if (value.trim().length >= 2) {
    const isGeorgian = onlyGeorgian(value);
    if (isGeorgian === true) {
      return true;
    }
  } else {
    return false;
  }
};

export const onlyGeorgian = (value) => {
  for (let i = 0; i < value.length; i++) {
    if (value.charCodeAt(i) < 4304 || value.charCodeAt(i) > 4336) {
      return false;
    } else {
      return true;
    }
  }
};

export const emailValidator = (value) => {
  //eslint-disable-next-line
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (value.match(emailFormat)) {
    const splitedEmail = value.split("@");
    if (splitedEmail[1] === "redberry.ge") {
      return true;
    }
  } else {
    return false;
  }
};

export const phoneNumberValidator = (value) => {
  const phoneNumberFormat = /^(\+?995)?(79\d{7}|5\d{8})$/;
  if (value.match(phoneNumberFormat)) {
    return true;
  } else {
    return false;
  }
};
