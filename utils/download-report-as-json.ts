import fs from 'fs'
import path from 'path'
import type { AuditReport } from 'types/audit-report'

export const exportAuditReport = (
  auditReport: AuditReport,
  auditId: string
) => {
  const auditsDir = path.resolve(__dirname, '../audits')
  if (!fs.existsSync(auditsDir)) {
    fs.mkdirSync(auditsDir)
  }
  const filePath = path.join(auditsDir, `audit-${auditId}.json`)
  fs.writeFileSync(filePath, JSON.stringify(auditReport, null, 2), 'utf8')
  // eslint-disable-next-line no-console
  console.log(`Audit report saved to ${filePath}`)
}
