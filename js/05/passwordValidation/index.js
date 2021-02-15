function passValIfElse(password) {
  if (password.length > 7) {
    return 'Strong';
  }

  return 'Weak';
}

function passValTernary(password) {
  return password.length > 7 ? 'Strong' : 'Weak';
}

function passValAnd(password) {
  return (password.length > 7 && 'Strong') || 'Weak';
}
