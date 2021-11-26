const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = require("mongodb").ObjectID;

const issueSchema = new mongoose.Schema({
  //이슈번호, 제목, 내용, 해시태그, 카테고리, 작성자, 작성일, 수정일, 업수, 조회수
  issueId: {
    //이슈번호
    type: String,
  },
  issueTitle: {
    //제목
    type: String,
    maxlength: 50,
    default: "",
  },
  issueContents: {
    //내용
    type: String,
    default: "",
  },
  issueHashtag: [
    {
      hashtag: {
        type: String,
        default: "",
      },
    },
  ],

  issueCategory: {
    required: true,
    default: 0,
    type: Number,
    enum: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
  },
  issueAuthor: {
    _id: {
      type: ObjectId,
    },
    author: {
      type: String,
      required: true,
    },
    //작성자
  },
  issueDate: {
    type: Date,
    required: true,
  },
  issueModifiedDate: {
    type: Date,
  },
  ups: [
    {
      //업한 유저
      user: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
      createAt: {
        type: Date,
      },
    },
  ],
  active: {
    //공개 비공개
    type: Number,
    enum: [0, 1],
    default: 0,
  },
  issueViewCnt: {
    //조회수
    type: Number,
    default: 0,
    // required: true,
  },
});

const Issue = mongoose.model("Issue", issueSchema);
module.exports = { Issue };
