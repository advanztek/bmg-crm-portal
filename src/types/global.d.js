/** @typedef {{ path: string, color?: string, label?: string, icon: React.ComponentType<{ fontSize?: number, style?: Record<string, any> }>, sub?: Array<{ path: string, label?: string, icon: React.ComponentType<{ fontSize?: number, style?: Record<string, any> }> }> }} NavItem */
/** @typedef {{label: string, key: number }} Tab */

/**
 * @typedef {Object} SupportSuggestion
 * @property {string} label
 * @property {string} color
 * @property {import("react").ComponentType<{fontSize?: number, color?: string}>} icon
 */

/**
 * @typedef {Object} FilterLabel
 * @property {string} label
 * @property {string} accent
 * @property {import("react").ComponentType<{fontSize?: number, color?: string}>} icon
 */

/**
 * @typedef {{label: string, align?: import("@mui/material").TableCellProps["align"] | undefined, icon?: React.ComponentType<{ fontSize?: number, style?: Record<string, any> }>}} TableColumn
 */

/**
 * Configuration for a search bar filter.
 *
 * @typedef {Object} SearchFilterConfig
 * @property {"search"} type - Discriminant for the search filter.
 * @property {string} key - Unique key used to read/write the value in filterValues.
 */

/**
 * Configuration for a generic field filter.
 *
 * @typedef {Object} FieldFilterConfig
 * @property {"field"} type - Discriminant for the field filter.
 * @property {string} key - Unique key used to read/write the value in filterValues.
 */

/**
 * Label configuration passed to FilterSelect.
 *
 * @typedef {Object} FilterSelectLabel
 * @property {React.ComponentType} icon - Icon component rendered beside the label.
 * @property {string} label - Text label for the filter.
 * @property {string} accent - Hex color string used for the label accent.
 */

/**
 * Configuration for a select (dropdown) filter.
 *
 * @template TItem
 * @typedef {Object} SelectFilterConfig
 * @property {"select"} type - Discriminant for the select filter.
 * @property {string} key - Unique key used to read/write the value in filterValues.
 * @property {FilterSelectLabel} label - Label config passed to FilterSelect.
 * @property {TItem[]} items - Available items for the dropdown.
 * @property {(item: TItem) => { label: string; value: string }} renderItem - Maps each item to a label/value pair.
 */

/**
 * Configuration for a date range filter.
 * Uses two separate keys since it manages two independent values.
 *
 * @typedef {Object} DateFilterConfig
 * @property {"date"} type - Discriminant for the date filter.
 * @property {string} fromKey - Key for the "from" date value in filterValues.
 * @property {string} toKey - Key for the "to" date value in filterValues.
 */

/**
 * Union of all supported filter configurations.
 *
 * @typedef {SearchFilterConfig | FieldFilterConfig | SelectFilterConfig<any> | DateFilterConfig} FilterConfig
 */

/**
 * @typedef {Object} ModalConfig
 * @property {boolean} open
 * @property {() => void} onClose
 */

export {};
