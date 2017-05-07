export default function() {
  this.transition(
    this.toRoute('loading'),
    this.use('wait', 1000, { then: 'fade' })
  );

  this.transition(
    this.fromRoute('index'),
    this.use('fade', { duration: 500 })
  );

  this.transition(
    this.toRoute('index'),
    this.use('fade', { duration: 500 })
  );

  this.transition(
    this.fromRoute('tour'),
    this.use('fade', { duration: 500 })
  );

  this.transition(
    this.toRoute('tour'),
    this.use('fade', { duration: 500 })
  );

  this.transition(
    this.fromRoute('music'),
    this.use('fade', { duration: 500 })
  );

  this.transition(
    this.toRoute('music'),
    this.use('fade', { duration: 500 })
  );

  this.transition(
    this.fromRoute('video'),
    this.use('fade', { duration: 500 })
  );

  this.transition(
    this.toRoute('video'),
    this.use('fade', { duration: 500 })
  );

  this.transition(
    this.fromRoute('about'),
    this.use('fade', { duration: 500 })
  );

  this.transition(
    this.toRoute('about'),
    this.use('fade', { duration: 500 })
  );
}
