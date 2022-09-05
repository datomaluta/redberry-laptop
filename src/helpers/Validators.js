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
  const format = /^[ა-ჰ]+$/;
  if (value.match(format)) {
    return true;
  } else {
    return false;
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
  const trimmedValue = value.trim();
  const phoneNumberFormat = /^(\+?995)?(79\d{7}|5\d{8})$/;
  if (trimmedValue.match(phoneNumberFormat)) {
    return true;
  } else {
    return false;
  }
};

export const laptopNameValidator = (value) => {
  const nameFormat = /^[a-zA-Z0-9$@$!%*?&#()^-_. +=]+$/;
  if (value.match(nameFormat)) {
    return true;
  } else {
    return false;
  }
};

export const onlyNumberValidator = (value) => {
  const numberFormat = /^[0-9]+$/;
  if (value.length > 0 && value.match(numberFormat)) {
    return true;
  } else {
    return false;
  }
};

export const imageValidator = (value) => {
  if (value) {
    return true;
  } else {
    return false;
  }
};

export const dateValidator = (value) => {
  const dateFormat =
    /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;

  if (value.match(dateFormat) || value.length === 0) {
    console.log("matches");
    console.log(value);
    return true;
  } else {
    return false;
  }
};
