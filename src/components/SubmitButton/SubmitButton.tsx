import React from "react";

interface IProps {
    value: string
}

export default function SubmitButton({ value }: IProps) {
    return (
        <button type="submit">{value}</button>

    )
}