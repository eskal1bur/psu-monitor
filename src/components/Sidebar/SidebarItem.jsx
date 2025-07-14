import React from 'react';
import './SidebarItem.css';

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
        <div className={`sidebar-item ${isFinalItem ? 'sidebar-item--final' : ''}`}>
            <div className="sidebar-item__header" onClick={handleClick}>
                {!isFinalItem && (
                    <span className="sidebar-item__arrow">
                        {isExpanded ? '▼' : '⯈'}
                    </span>
                )}

                {statusStyles && (
                    <span
                        className="sidebar-item__status-dot"
                        style={{ backgroundColor: statusStyles.backgroundColor }}
                    />
                )}

                <span className="sidebar-item__title">{title}</span>
            </div>

            {isExpanded && children && (
                <div className="sidebar-item__children">
                    {children}
                </div>
            )}
        </div>
    );
};

export default SidebarItem;