import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-nav-link', 'Integration | Component | x nav link', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{x-nav-link 'index'}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#x-nav-link 'index'}}
      template block text
    {{/x-nav-link}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
