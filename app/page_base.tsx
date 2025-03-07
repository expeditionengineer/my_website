import React from 'react';

interface PageProps {
    heading: string,
    text: React.JSX.Element,
}

const PageBase: React.FC<PageProps> = ({heading, text}) => {
    return (
        <div className="flex flex-col gap-8 pt-30">
            <div className="flex flex-row gap-8">
                <span className="text-4xl font-bold text-yellow-600">{heading}</span>
            </div>
            <div className="w-100 text-xl">
                {text}
            </div>
        </div>
    );
}

export default PageBase;