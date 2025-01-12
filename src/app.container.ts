import { container } from 'inversify-props'
import "reflect-metadata";
import IKanyeWestService from '@/services/IKanyeWestService'
import KanyeWestService from '@/services/impl/KanyeWestService'

export default function buildDependencyContainer (): void {
  container.addTransient<IKanyeWestService>(KanyeWestService)
}
