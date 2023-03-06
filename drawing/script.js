function draw(x, y) {
    if (pic[x][y] === 0) {
        pic[x][y] = 1;
        draw(x-1, y);
        draw
    }
}