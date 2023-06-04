// src/components/common/Button.tsx

import React from 'react';

interface ButtonProps {
    label: string;
    onClick?: () => void;  // 추가된 줄
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
    return <button onClick={onClick}>{label}</button>;
};

export default Button;
