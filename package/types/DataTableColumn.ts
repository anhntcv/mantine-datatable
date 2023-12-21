import type { MantineStyleProp, MantineTheme } from '@mantine/core';
import type { DataTableColumnTextAlign } from './DataTableColumnTextAlign';

export type DataTableColumn<T = Record<string, unknown>> = {
  /**
   * Column accessor.
   * You can use dot-notation for nested objects property drilling.
   * (i.e. `department.name` or `department.company.name`)
   */
  accessor: keyof T | (string & NonNullable<unknown>);

  /**
   * Optional column header title.
   * If not present, one will be generated by "humanizing" the provided column accessor.
   * (i.e. `firstName` -> `First name`; `user.firstName` -> `User first name`)
   */
  title?: React.ReactNode;

  /**
   * Custom cell data render function.
   * Accepts the current record and its index in `records` as arguments and returns a React node
   * (remember that a string is a valid React node too).
   */
  render?: (record: T, index: number) => React.ReactNode;

  /**
   * Column text alignment.
   * @default `left`
   */
  textAlign?: DataTableColumnTextAlign;

  /**
   * If true, column will be sortable.
   */
  sortable?: boolean;

  /**
   * If set to true, the column can be dragged.
   */
  draggable?: boolean;

  /**
   * If set to true, the column can be toggled.
   */
  toggleable?: boolean;

  /**
   * If set to true, the column can be resized.
   */
  resizable?: boolean;

  /**
   * If set to true, the column will be toggled by default.
   */
  defaultToggle?: boolean;

  /**
   * Optional node providing the user with filtering options.
   * If present, a filter button will be added to the column's header. Upon clicking that button,
   * a pop-over showing the provided node will be opened.
   *
   * Alternatively, a function returning a node can be provided. The function receives props with a `close`
   * method which allows programmatically closing the pop-over.
   *
   * ```tsx
   * // …
   * columns={[
   *   {
   *     accessor: 'name',
   *     filter: ({ close }) => {
   *       return <Stack>
   *         <Button onClick={() => { setFilter(undefined); close(); }}>Reset</Button>
   *       </Stack>
   *     },
   *   }
   * ]}
   * // …
   * ```
   *
   * Note: this property only takes care of rendering the node which provides the filtering options.
   * It is assumed that the actual filtering is performed somewhere in user code.
   */
  filter?: React.ReactNode | ((params: { close: () => void }) => React.ReactNode);

  /**
   * If true, filter icon will be styled differently to indicate the filter is in effect.
   */
  filtering?: boolean;

  /**
   * Desired column width.
   */
  width?: string | number;

  /**
   * If true, column will not be visible.
   */
  hidden?: boolean;

  /**
   * If set, the column will only be visible according to the specified media query.
   * Can be a string, or a function receiving the current theme and returning a string.
   */
  visibleMediaQuery?: string | ((theme: MantineTheme) => string);

  /**
   * Optional class name passed to the column title
   */
  titleClassName?: string;

  /**
   * Optional style passed to the column title.
   * Either a style object, or a function receiving the current theme and returning a style object.
   */
  titleStyle?: MantineStyleProp;

  /**
   * Optional class name passed to each data cell in the column.
   * Can be a string, or a function receiving the current record and its index
   * as arguments and returning a string.
   */
  cellsClassName?: string | ((record: T, index: number) => string | undefined);

  /**
   * Optional style passed to each data cell in the column.
   * A function that receives the current record and its index as arguments and returns either
   * a style object, or a function that accepts theme and returns a style object.
   */
  cellsStyle?: (record: T, index: number) => MantineStyleProp | undefined;

  /**
   * Optional function returning an object of custom attributes to be applied to each cell in the column.
   * Receives the current record and its index as arguments.
   * Useful for adding data attributes, handling middle-clicks, etc.
   */
  customCellAttributes?: (record: T, index: number) => Record<string, unknown>;

  /**
   * Optional column footer content.
   * If at least one column has a footer, the table will display a footer row.
   */
  footer?: React.ReactNode;

  /**
   * Optional class name passed to the column footer.
   */
  footerClassName?: string;

  /**
   * Optional style passed to the column footer.
   */
  footerStyle?: MantineStyleProp;
} & (
  | {
      /**
       * If true, cell content in this column will be truncated with ellipsis as needed and will not wrap
       * to multiple lines (i.e. `overflow: hidden; text-overflow: ellipsis`; `white-space: nowrap`).
       * On a column, you can either set this property or `noWrap`, but not both.
       */
      ellipsis?: boolean;

      noWrap?: never;
    }
  | {
      ellipsis?: never;

      /**
       * If true, cell content in this column will not wrap to multiple lines (i.e. `white-space: nowrap`).
       * This is useful for columns containing long strings.
       * On a column, you can either set this property or `ellipsis`, but not both.
       */
      noWrap?: boolean;
    }
);
