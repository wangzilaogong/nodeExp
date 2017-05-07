/**
 * Created by wk on 2017-05-04.
 */
exports.showIndex = function (req,res) {

    res.render("index");
}
exports.showAlbum = function (req,res) {
    res.send("相册："+req.params.albumName);
}