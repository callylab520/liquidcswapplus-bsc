import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import { OwnershipTransferred, SwapPlus } from "../generated/SwapPlus/SwapPlus"

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createSwapPlusEvent(
  tokenIn: Address,
  tokenOut: Address,
  amountIn: BigInt,
  amountUsed: BigInt,
  amountOut: BigInt
): SwapPlus {
  let swapPlusEvent = changetype<SwapPlus>(newMockEvent())

  swapPlusEvent.parameters = new Array()

  swapPlusEvent.parameters.push(
    new ethereum.EventParam("tokenIn", ethereum.Value.fromAddress(tokenIn))
  )
  swapPlusEvent.parameters.push(
    new ethereum.EventParam("tokenOut", ethereum.Value.fromAddress(tokenOut))
  )
  swapPlusEvent.parameters.push(
    new ethereum.EventParam(
      "amountIn",
      ethereum.Value.fromUnsignedBigInt(amountIn)
    )
  )
  swapPlusEvent.parameters.push(
    new ethereum.EventParam(
      "amountUsed",
      ethereum.Value.fromUnsignedBigInt(amountUsed)
    )
  )
  swapPlusEvent.parameters.push(
    new ethereum.EventParam(
      "amountOut",
      ethereum.Value.fromUnsignedBigInt(amountOut)
    )
  )

  return swapPlusEvent
}
