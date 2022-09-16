import React from "react";
import Coment from "./comment";
import PropTypes from "prop-types";

const CommentsList = ({ comments, onRemove }) => {
    return comments.map((comment) => (
        <Coment key={comment._id} {...comment} onRemove={onRemove} />
    ));
};

CommentsList.propTypes = {
    comment: PropTypes.array,
    onremove: PropTypes.func
};

export default CommentsList;

// 11 строчка: comments/comment
