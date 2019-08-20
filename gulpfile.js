var gulp = require("gulp");
var cache = require('gulp-cached'); //変更のあったもの(scss)
var plumber = require('gulp-plumber'); //watch中にエラー防止
var csscomb = require('gulp-csscomb'); //cssプロパティ順序
var sass = require("gulp-sass");//cssコンパイル
var autoprefixer = require("gulp-autoprefixer");//ベンダープレフィックス
var gcmq = require('gulp-group-css-media-queries'); //CSSメディアクエリー整理
var notify = require('gulp-notify'); //エラーを通知
var imageOptim = require('gulp-imageoptim'); //画像圧縮(画像)
var changed = require('gulp-changed'); //変更のあったもの(画像)

/// cssコンパイル ////////////////////////////////////////////
gulp.task("sass", function() {
gulp.src("scss/*scss")
.pipe(cache('sass'))
.pipe(plumber({
errorHandler: notify.onError("Error: &lt;%= error.message %&gt;")
}))
.pipe(csscomb())
.pipe(sass({
outputStyle: 'expanded'
}))
.pipe(autoprefixer())
.pipe(gcmq())
.pipe(gulp.dest("./css"))
.pipe(notify({
title: 'Sassをコンパイルしました。',
message: new Date(),
sound: 'Tink',
}));
});

/// 画像圧縮 ////////////////////////////////////////////
//差分監視画像フォルダ
var pathsIMG = {
srcDir : 'img/',
dstDir : 'img/dest'
}

gulp.task('images', function() {
var srcGlob = pathsIMG.srcDir + '*.+(jpg|jpeg|png|gif|svg)';
var dstGlob = pathsIMG.dstDir;

return gulp.src( srcGlob )
.pipe(changed( dstGlob ))
.pipe(imageOptim.optimize())
.pipe(gulp.dest( dstGlob ))
.pipe(notify({
title: '画像を圧縮しました。',
message: new Date(),
sound: 'Tink',
}));
});

/// 監視フォルダ ////////////////////////////////////////////
gulp.task('watch', function(){
gulp.watch('scss/*.scss', ['sass']);
gulp.watch('img/*.+(jpg|jpeg|png|gif|svg)', ['images']);
});

/// Gulpコマンドで動かすもの ////////////////////////////////////////////
gulp.task('default', ['watch']);
