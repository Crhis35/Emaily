// const re = /^(([^<>()[]\\.,;:s@"]+(.[^<>()[]\\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
// eslint-disable-next-line
const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
export default (emails) => {
  const invalidEmails = emails
    .split(',')
    .map((email) => email.trim())
    .filter((email) => re.test(email) === false);
  if (invalidEmails.length) {
    return `These emails are invalid: ${invalidEmails}`;
  }
};
