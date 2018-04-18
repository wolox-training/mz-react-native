export function hasUserAccess() {
  return localStorage.getItem('currentUser') !== null;
}
