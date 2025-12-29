interface PropDefinition {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
}

interface PropsTableProps {
  props: PropDefinition[];
  title?: string;
}

export default function PropsTable({ props, title = 'Props' }: PropsTableProps) {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold text-nimbus-text-primary mb-4">{title}</h3>
      <div className="rounded-xl border border-nimbus-border overflow-hidden">
        <table className="w-full">
          <thead className="bg-nimbus-surface-elevated">
            <tr className="border-b border-nimbus-border">
              <th className="text-left px-4 py-3 text-sm font-semibold text-nimbus-text-primary">Name</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-nimbus-text-primary">Type</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-nimbus-text-primary hidden md:table-cell">Default</th>
              <th className="text-left px-4 py-3 text-sm font-semibold text-nimbus-text-primary">Description</th>
            </tr>
          </thead>
          <tbody className="bg-nimbus-surface">
            {props.map((prop, index) => (
              <tr
                key={prop.name}
                className={index !== props.length - 1 ? 'border-b border-nimbus-border-subtle' : ''}
              >
                <td className="px-4 py-3">
                  <code className="text-sm text-nimbus-teal font-mono">{prop.name}</code>
                  {prop.required && (
                    <span className="ml-1 text-nimbus-error text-xs">*</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <code className="text-sm text-nimbus-orange font-mono">{prop.type}</code>
                </td>
                <td className="px-4 py-3 hidden md:table-cell">
                  {prop.default ? (
                    <code className="text-sm text-nimbus-text-secondary font-mono">{prop.default}</code>
                  ) : (
                    <span className="text-nimbus-text-tertiary">—</span>
                  )}
                </td>
                <td className="px-4 py-3 text-sm text-nimbus-text-secondary">
                  {prop.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs text-nimbus-text-tertiary mt-2">
        <span className="text-nimbus-error">*</span> Required prop
      </p>
    </div>
  );
}

