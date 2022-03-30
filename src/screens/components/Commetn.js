import React from "react";
import { Card } from "react-bootstrap";
import { StarBar } from "./StarBar";

export const Comment = (props) => {
    const { ListComment } = props
    return(
        <Card className="mt-2 w-100">
            <Card.Body>
                <Card.Text className="text-start">
                {ListComment.discription}
                </Card.Text>
                <Card.Subtitle className="text-start">
                <StarBar count={ListComment.stars} />
                </Card.Subtitle>
            </Card.Body>
        </Card>
    )
}