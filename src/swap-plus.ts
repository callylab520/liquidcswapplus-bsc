import {
  OwnershipTransferred as OwnershipTransferredEvent,
  SwapPlus as SwapPlusEvent
} from "../generated/SwapPlusv1/SwapPlusv1"
import { OwnershipTransferred, SwapPlus } from "../generated/schema"

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSwapPlus(event: SwapPlusEvent): void {
  let entity = new SwapPlus(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenIn = event.params.tokenIn
  entity.tokenOut = event.params.tokenOut
  entity.amountIn = event.params.amountIn
  entity.amountUsed = event.params.amountUsed
  entity.amountOut = event.params.amountOut

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.account = event.transaction.from

  entity.save()
}
