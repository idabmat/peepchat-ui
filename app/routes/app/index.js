import Ember from 'ember';

const { inject } = Ember;

export default Ember.Route.extend({
  flashMessages: inject.service(),

  actions: {
    createRoom() {
      let data = this.get('currentModel.newRoom');
      let room = this.store.createRecord('room', {name: data.name});
      this.set('currentModel.newRoom.errors', []);

      room.save().then(() => {
        this.get('flashMessages').success(`Created room: ${data.name}`);
        this.set('currentModel.newRoom.name', '');
      }).catch((err) => {
        this.store.unloadRecord(room);
        this.set('currentModel.newRoom.errors', (err.errors || []).mapBy('detail'));
        this.get('flashMessages').danger(`Problem creating room: ${data.name}`);
      });
    },
    removeRoom(room) {
      if (window.confirm('Are you sure?')) {
        room.destroyRecord().then(() => {
          this.get('flashMessages').success(`Deleted room: ${room.get('name')}`);
        }).catch(() => {
          this.get('flashMessages').danger(`Problem deleting room: ${room.get('name')}`);
        });
      }
    }
  },

  model() {
    let rooms = this.store.findAll('room');
    rooms.map((room) => {
      room.belongsTo('owner').reload();
    })
    return {
      rooms: rooms,
      newRoom: {name: '', errors: []}
    };
  }
});
