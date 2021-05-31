var canvas = new fabric.Canvas("myCanvas");
block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Img) {
    player_object = Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(150);
    player_object.set({
        top:player_y,
        left:player_x
    });
    canvas.add(player_object)});
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        player_image_object = Img;
        player_image_object.scaleToWidth(block_image_width);
        player_image_object.scaleToHeight(block_image_height);
        player_image_object.set({
            top:player_y,
            left:player_x
            });
        canvas.add(player_image_object)});
}


window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(e.shiftKey == true && keyPressed == '80') {
        console.log("P and shift are pressed together");
        block_image_width = block_image_width + 5;
        block_image_height = block_image_height + 5;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height; 
    }

    if(e.shiftKey == true && keyPressed == '77') {
        console.log("M and shift are pressed together");
        block_image_width = block_image_width - 5;
        block_image_height = block_image_height - 5;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height; 
    }

    if(keyPressed == '38') {
        up();
        console.log("UP")
    }

    if(keyPressed == '37') {
        left();
        console.log("LEFT")
    }

    if(keyPressed == '39') {
        right();
        console.log("right")
    }

    if(keyPressed == '40') {
        down();
        console.log("DOWN")
    }

    if(keyPressed == '87') {
        new_image("wall.jpg");
        console.log("wall, w key pressed");
    }

    if(keyPressed == '71') {
        new_image("ground.png");
        console.log("ground, g key pressed");
    }

    if(keyPressed == '76') {
        new_image("light_green.png");
        console.log("light green, l key pressed");
    }

    if(keyPressed == '84') {
        new_image("trunk.jpg");
        console.log("trunk, t key pressed");
    }

    if(keyPressed == '82') {
        new_image("roof.jpg");
        console.log("roof, r key pressed");
    }

    if(keyPressed == '89') {
        new_image("yellow_wall.png");
        console.log("yellow wall, y key pressed");
    }

    if(keyPressed == '68') {
        new_image("dark_green.png");
        console.log("dark green, d key pressed");
    }

    if(keyPressed == '85') {
        new_image("unique.png");
        console.log("unique block, u key pressed");
    }

    if(keyPressed == '67') {
        new_image("cloud.jpg");
        console.log("cloud, c key pressed");
    }
}

function up() {
    if(player_y >= 0) {
        player_y = player_y - block_image_height;
        console.log("Block Image Height: " + player_y);
        console.log("Player's X = " + player_x + ", Player's Y = " + player_y);
        canvas.remove(player_object);
        playerUpdate();
    }
}

function down() {
    if(player_y <= 600) {
        player_y = player_y + block_image_height;
        console.log("Block Image Height: " + player_y);
        console.log("Player's X = " + player_x + ", Player's Y = " + player_y);
        canvas.remove(player_object);
        playerUpdate()
    }
}

function left() {
    if(player_x >= 0) {
        player_x = player_x - block_image_width;
        console.log("Block Image Width: " + player_x);
        console.log("Player's X = " + player_x + ", Player's Y = " + player_y);
        canvas.remove(player_object);
        playerUpdate()
    }
}

function right() {
    if(player_y <= 800) {
        player_x = player_x + block_image_width;
        console.log("Block Image Width: " + player_x);
        console.log("Player's X = " + player_x + ", Player's Y = " + player_y);
        canvas.remove(player_object);
        playerUpdate();
    }
}