import Ember from 'ember';

const { Route, inject } = Ember;

export default Route.extend({
  flash_messages: inject.service(),
  actions: {
    doRegister() {
      this.get('currentModel').save().then(() => {
        this.transitionTo('auth.login');
        this.get('flashMessages').success('Registered! Please sign in now.');
      }).catch((response) => {
        const { errors } = response;
        this.get('flashMessages').danger(errors.mapBy('detail').join(', '));
      });
    }
  },
  model() {
    return this.store.createRecord('user');
  }
});
