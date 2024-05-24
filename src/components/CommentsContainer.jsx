import React from 'react'

const CommentsContainer = () => {

    const commentsData = [
        {
            name: "Shivam Sharma",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: []
        },
        {
            name: "Shivam Sharma",
            comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [
                {
                    name: "Shivam Sharma",
                    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    replies: []
                },
                {
                    name: "Shivam Sharma",
                    comment: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    replies: []
                },
            ]
        },



    ]

    return (
        <div className="ml-48">
            Lorem ipsum dolor.
        </div>
    )
}

export default CommentsContainer
