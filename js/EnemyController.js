class EnemyController {
  constructor(x, y, spriteName, configs){
    this.sprite = Nakama.enemyGroup.create(x, y, 'assets', spriteName);
    this.sprite.anchor = new Phaser.Point(0.5, 0.5);

    this.configs = configs;
    this.configs.moveRadius = 250;
    this.configs.startingX = x;
    this.sprite.health = this.configs.health;

    this.sprite.update = this.update.bind(this);
  }

  update(){
    this.sprite.position.x =
      this.configs.startingX + this.configs.moveRadius * Math.sin(Nakama.game.time.time / 1000);
  }
}
