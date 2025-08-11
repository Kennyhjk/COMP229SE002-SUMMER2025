function getErrorMessage(err) {
  if (err.name === 'ValidationError') {
    for (let field in err.errors) {
      if (err.errors[field].message) {
        return err.errors[field].message;
      }
    }
  }

  if (err.code && err.code === 11000) {
    return 'Duplicate field value entered';
  }

  return err.message || 'Unknown server error';
}

module.exports = {
  getErrorMessage,
};