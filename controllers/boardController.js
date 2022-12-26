const boardService = require("../services/boardService");

module.exports = {
  detailBoard: async(req, res, next) => {
    const postId = req.params.id;  
    try {
      const result = await boardService.detailBoard(postId);
      console.log(result);
      if(result.status == true) {
        return res.status(200).json(result.rows);
      }
    } catch (err) {
      next(err);
    }
  },
  boardWrite: async (req, res, next) => {
    const userId = req.id;
    const { title, author, text } = req.body; 
    const date = new Date();
    if(title == '' || text == '' || author == '') {
      return res.status(205).json({
        code: 205,
        message: '게시물의 내용을 작성해주세요',
      });
    }
    try {
      const values = [ userId, title, author, date, text ];
      const result = await boardService.boardWrite(values);
      if(result.status == true) {
        return res.status(200).json({
          code: 200,
          message: `${userId}님의 게시물이 등록되었습니다.`,
        });
      }
    } catch (err) {
      next(err);
    }
  },
  boardUpdate: async (req, res, next) => {
    const userId = req.id;
    const postId = Number(req.params.id);
    const { title, text } = req.body; 
    const date = new Date();
    try {
      if(title == '' || text == '') {
        return res.status(205).json({
          code: 205,
          message: '제목 혹은 내용을 작성해주세요',
        });
      }
      const values = [ title, date, text, postId, userId ];
      const result = await boardService.boardUpdate(values);
      if(result.status == true){
        return res.status(200).json({
          code: 200,
          message: `${userId}님의 게시물이 수정되었습니다.`,
        });
      } else {
        return res.status(401).json({
          code: 401,
          message: `게시물의 권한이 없습니다.`,
        });
      }
    } catch (err) {
      next(err);
    }
  },
  boardDelete: async(req, res, next) => {
    const postId = parseInt(req.params.id);
    const userId = req.id;
    try {
      const values = [ postId, userId ];
      const result = await boardService.boardDelete(values);
      if(result.status == true) {
        console.log(result.status);
        return res.status(201).json({
          code: 201,
          message: `${userId}님의 게시물이 삭제되었습니다.`,
        });
      }
    } catch (err) {
      next(err);
    }
  },
};