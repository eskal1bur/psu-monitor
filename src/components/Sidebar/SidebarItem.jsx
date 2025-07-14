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

        // Для конечных элементов вызываем onSelect
        if (isFinalItem && onSelect) {
            onSelect(title);
        }
        // Для родительских элементов - только раскрытие
        else if (children && onClick) {
            onClick();
        }
    };

    return (
        <div className="sidebar-item">
            <div className="sidebar-item-header" onClick={handleClick}>
                {children && (
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