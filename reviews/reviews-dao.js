import exp from 'constants';
import reviewsModel from './reviews-model.js';
export const findReview = (albumId) => reviewsModel.find({albumId: albumId});
//export const findReviewByAuthorId = () => reviewsModel.find().populate("author", "username").exec();
export const findReviewByAuthorId = (author) => reviewsModel.find({author: author});
export const createReview = (review) => reviewsModel.create(review);
export const deleteReview = (rid) => reviewsModel.deleteOne({_id: rid});
export const updateReview = (rid, review) => reviewsModel.updateOne({_id: rid}, {$set: review})