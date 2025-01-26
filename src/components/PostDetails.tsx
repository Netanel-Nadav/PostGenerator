import React, { ReactNode, useEffect, useState } from 'react';
import { utilService } from '../services/utils';

interface IProps {
    post: any;
}

export const PostDetails: React.FC<IProps> = ({ post }) => {
    const [trimedStr, setTrimedStr] = useState<string | null>(null);
    const [isUserPaid, setIsUserPaid] = useState(false);

    useEffect(() => {
        if (post?.content) {
            trimStr();
        }
    }, [post]);

    const trimStr = () => {
        const trimmed = utilService.trimTextToDots(post.content, 350);
        setTrimedStr(trimmed);
    };

    // Function to convert HTML string to React elements
    const createElementFromHTML = (htmlString: string): ReactNode[] => {
        const template = document.createElement('template');
        template.innerHTML = htmlString;

        const voidElements = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr'];

        const mapNodeToElement = (node: ChildNode, index: number): ReactNode => {
            if (node.nodeType === Node.TEXT_NODE) {
                return node.textContent;
            } else if (node.nodeType === Node.ELEMENT_NODE) {
                const element = node as HTMLElement;
                const attributes = Array.from(element.attributes).reduce((acc, attr) => {
                    const attrName = attr.name === 'class' ? 'className' : attr.name;
                    acc[attrName] = attr.value;
                    return acc;
                }, {} as { [key: string]: any });

                if (voidElements.includes(element.tagName.toLowerCase())) {
                    return React.createElement(element.tagName.toLowerCase(), { key: index, ...attributes });
                } else {
                    const children = Array.from(element.childNodes).map(mapNodeToElement);
                    return React.createElement(element.tagName.toLowerCase(), { key: index, ...attributes }, children);
                }
            }
            return null;
        };

        return Array.from(template.content.childNodes).map(mapNodeToElement).filter(Boolean);
    };

    const toggleContent = () => {
        setIsUserPaid(!isUserPaid);
    };

    return (
        <div className="post-details">
            <div className="overlay"></div>
            <div className="content">
                {!isUserPaid ? (
                    <>
                        {trimedStr && createElementFromHTML(trimedStr)}
                        <button className="buy-content-btn" onClick={toggleContent}>
                            אני מעוניין לרכוש
                        </button>
                    </>
                ) : (
                    createElementFromHTML(post.content)
                )}
            </div>
        </div>
    );
};
