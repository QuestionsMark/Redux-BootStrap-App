export const callApiMiddleware = store => next => action => {
    console.log('To jest middleware.');
    next(action);
}