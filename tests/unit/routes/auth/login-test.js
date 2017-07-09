import { moduleFor, test } from 'ember-qunit';

moduleFor('route:auth/login', 'Unit | Route | auth/login', {
  // Specify the other units that are required for this test.
  needs: ['service:session', 'service:flash_messages']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
