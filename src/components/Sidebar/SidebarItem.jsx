import React from 'react';

const SidebarItem = ({
                         title,
                         children,
                         isExpanded,
                         onClick,
                         onSelect,
                         statusStyles,
                         isFinalItem = false
                     }) => {
    const handleClick = (e) => {
        e.stopPropagation();

        if (isFinalItem && onSelect) {
            onSelect(title);
        } else if (onClick) {
            onClick();
        }
    };

    return (
        <div className="sidebar-item">
            <div
                className={`sidebar-item-header ${isFinalItem ? 'final-item' : ''}`}
                onClick={handleClick}
            >
                {!isFinalItem && (
                    <span className="arrow">{isExpanded ? '▼' : '⯈'}</span>
                )}

                {statusStyles && (
                    <span
                        className="status-dot"
                        style={{ backgroundColor: statusStyles.backgroundColor }}
                    />
                )}

                <span className="title">{title}</span>
            </div>

            {isExpanded && children && (
                <div className="sidebar-item-children">
                    {children}
                </div>
            )}
        </div>
    );
};

export default SidebarItem;