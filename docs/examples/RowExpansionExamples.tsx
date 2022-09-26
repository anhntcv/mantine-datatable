import { createStyles, Group, Stack, Text } from '@mantine/core';
import { DataTable } from 'mantine-datatable';
import { companies } from '~/data';

const records = companies.slice(0, 5);

const useStyles = createStyles((theme) => ({
  details: { background: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0] },
  label: { width: 130 },
}));

export function RowExpansionExampleSimple() {
  const { classes } = useStyles();
  // example-start simple
  return (
    <DataTable
      withBorder
      withColumnBorders
      columns={[{ accessor: 'name' }, { accessor: 'city' }, { accessor: 'state' }]}
      records={records}
      rowExpansion={{
        content: ({ record }) => (
          <Stack className={classes.details} p="xs" spacing={6}>
            <Group spacing={6}>
              <Text className={classes.label}>Postal address:</Text>
              <Text>
                {record.streetAddress}, {record.city}, {record.state}
              </Text>
            </Group>
            <Group spacing={6}>
              <Text className={classes.label}>Mission statement:</Text>
              <Text italic>“{record.missionStatement}”</Text>
            </Group>
          </Stack>
        ),
      }}
    />
  );
  // example-end
}

export function RowExpansionExampleCollapseProps() {
  const { classes } = useStyles();
  // example-start collapse-props
  return (
    <DataTable
      // example-skip
      withBorder
      withColumnBorders
      columns={[{ accessor: 'name' }, { accessor: 'city' }, { accessor: 'state' }]}
      records={records}
      // example-resume
      rowExpansion={{
        collapseProps: {
          transitionDuration: 500,
          animateOpacity: false,
          transitionTimingFunction: 'ease-out',
        },
        // example-skip
        content: ({ record }) => (
          <Stack className={classes.details} p="xs" spacing={6}>
            <Group spacing={6}>
              <Text className={classes.label}>Postal address:</Text>
              <Text>
                {record.streetAddress}, {record.city}, {record.state}
              </Text>
            </Group>
            <Group spacing={6}>
              <Text className={classes.label}>Mission statement:</Text>
              <Text italic>“{record.missionStatement}”</Text>
            </Group>
          </Stack>
        ),
        // example-resume
      }}
    />
  );
  // example-end
}

export function RowExpansionExampleInitiallyExpandedRows() {
  const { classes } = useStyles();
  // example-start initially-expanded-rows
  return (
    <DataTable
      withBorder
      withColumnBorders
      columns={[{ accessor: 'name' }, { accessor: 'city' }, { accessor: 'state' }]}
      records={records}
      rowExpansion={{
        initiallyExpanded: (record) => record.name === 'Pfeffer and Sons',
        // example-skip
        content: ({ record }) => (
          <Stack className={classes.details} p="xs" spacing={6}>
            <Group spacing={6}>
              <Text className={classes.label}>Postal address:</Text>
              <Text>
                {record.streetAddress}, {record.city}, {record.state}
              </Text>
            </Group>
            <Group spacing={6}>
              <Text className={classes.label}>Mission statement:</Text>
              <Text italic>“{record.missionStatement}”</Text>
            </Group>
          </Stack>
        ),
        // example-resume
      }}
    />
  );
  // example-end
}

export function RowExpansionExampleMultipleExpandedRows() {
  const { classes } = useStyles();
  // example-start multiple-expanded-rows
  return (
    <DataTable
      withBorder
      withColumnBorders
      columns={[{ accessor: 'name' }, { accessor: 'city' }, { accessor: 'state' }]}
      records={records}
      rowExpansion={{
        allowMultiple: true,
        // example-skip
        content: ({ record }) => (
          <Stack className={classes.details} p="xs" spacing={6}>
            <Group spacing={6}>
              <Text className={classes.label}>Postal address:</Text>
              <Text>
                {record.streetAddress}, {record.city}, {record.state}
              </Text>
            </Group>
            <Group spacing={6}>
              <Text className={classes.label}>Mission statement:</Text>
              <Text italic>“{record.missionStatement}”</Text>
            </Group>
          </Stack>
        ),
        // example-resume
      }}
    />
  );
  // example-end
}

export function RowExpansionExampleTriggerAlways() {
  const { classes } = useStyles();
  // example-start trigger-always
  return (
    <DataTable
      withBorder
      withColumnBorders
      columns={[{ accessor: 'name' }, { accessor: 'city' }, { accessor: 'state' }]}
      records={records}
      rowExpansion={{
        trigger: 'always',
        // example-skip
        content: ({ record }) => (
          <Stack className={classes.details} p="xs" spacing={6}>
            <Group spacing={6}>
              <Text className={classes.label}>Postal address:</Text>
              <Text>
                {record.streetAddress}, {record.city}, {record.state}
              </Text>
            </Group>
            <Group spacing={6}>
              <Text className={classes.label}>Mission statement:</Text>
              <Text italic>“{record.missionStatement}”</Text>
            </Group>
          </Stack>
        ),
        // example-resume
      }}
    />
  );
  // example-end
}