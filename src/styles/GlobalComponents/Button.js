import React from "react";

import { ButtonBack, ButtonFront } from "./index";

const Button = (props) => (
    <ButtonBack
        alt={props.alt}
        form={props.form}
        disabled={props.disabled}
    >
        {props.children}
        <ButtonFront
            alt={props.alt}

            disabled={props.disabled}
        >
            {props.children}
        </ButtonFront>
    </ButtonBack>
);

export default Button;