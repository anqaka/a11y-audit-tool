<script lang="ts" setup>
import type { PageStatus } from 'types/audit-report'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'

ChartJS.register(ArcElement, Tooltip, Legend)

const props = defineProps<{
  pageStatuses: PageStatus[]
}>()

const notTestedStatusCount = props.pageStatuses.filter(
  (page) => page.status === 'Not tested'
).length
const notApplicableStatusCount = props.pageStatuses.filter(
  (page) => page.status === 'Not applicable'
).length
const passedStatusCount = props.pageStatuses.filter(
  (page) => page.status === 'Passed'
).length
const failedStatusCount = props.pageStatuses.filter(
  (page) => page.status === 'Failed'
).length

const chartFoo = {
  labels: [
    `Not tested (${notTestedStatusCount})`,
    `Not applicable (${notApplicableStatusCount})`,
    `Passed (${passedStatusCount})`,
    `Failed (${failedStatusCount})`,
  ],
  datasets: [
    {
      data: [
        notTestedStatusCount,
        notApplicableStatusCount,
        passedStatusCount,
        failedStatusCount,
      ],
      label: 'Chart',
      backgroundColor: ['#1E3A8A', '#4A5563', '#17A349', '#DC2625'],
      hoverOffset: 4,
    },
  ],
}
const chartOptions = {
  plugins: {
    legend: {
      position: 'left',
      align: 'left',
      maxHeight: '200px',
      labels: {
        font: {
          size: '18px',
        },
        padding: 20,
      },
    },
  },
  animation: false,
}
</script>

<template>
  <div class="flex h-[500px] w-[500px] flex-col">
    <p class="sr-only">
      Summary: Failed: {{ failedStatusCount }} page(s), Passed:
      {{ passedStatusCount }} page(s), Not tested:
      {{ notTestedStatusCount }} page(s), Not applicable:
      {{ notApplicableStatusCount }} page(s),
    </p>
    <div aria-hidden="true">
      <Doughnut
        :data="chartFoo"
        :options="chartOptions"
        class="w-full"
      />
    </div>
  </div>
</template>
