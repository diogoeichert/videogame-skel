"use strict";

/* global core */

const Color = core.Color;
const Command = core.Command;
const ControllableSprite = core.plugin.ControllableSprite;
const Starfield = core.plugin.Starfield;
const TextSprite = core.TextSprite;
const Core = core.Core;

let scene = Core.scene()
	.setColor(Color.Navy);

const starfield = new Starfield()
	.setSpeedX(-1)
	.setSpeedY(1);

const score = new TextSprite()
	.setWidth(16)
	.setHeight(16)
	.setRight(scene.right)
	.setTop(scene.top);

const player = new ControllableSprite()
	.setWidth(32)
	.setHeight(32)
	.setColor(Color.Yellow)
	.setSolid();

player.update = () => {
	if (player.controller.didPerform([Command.LEFT, Command.RIGHT, Command.LEFT, Command.RIGHT, Command.B, Command.A])) {
		player.center = loot.center;
	}

	if (player.controller.keyDown(Command.A)) {
		player.step = 4;
	} else {
		player.step = 2;
	}
};

const loot = Core.sprite()
	.setWidth(16)
	.setHeight(16)
	.setCenter(scene.center)
	.setColor(Color.Green)
	.setSolid();

loot.onCollision = () => {
	++score.text;
	loot.centerX = Core.random(scene.width);
	loot.centerY = Core.random(scene.height);
};

scene.add(starfield);
scene.add(score);
scene.add(player);
scene.add(loot);
score.text = 0;
Core.setName("My Game");
Core.init(scene);
