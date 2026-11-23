/**
 * Calculates a detailed rental estimate.
 * @param {Object} params
 * @param {number} params.pricePerDay
 * @param {number} params.days
 * @param {string} [params.insurance='premium'] - 'basic' | 'premium' | 'vip'
 * @returns {Object}
 */
export function calculateRentalEstimate({
  pricePerDay,
  days = 1,
  insurance = 'premium',
}) {
  const insuranceRates = {
    basic: 49,
    premium: 99,
    vip: 179,
  };

  const rentalSubtotal = pricePerDay * days;
  const insuranceFee = (insuranceRates[insurance] || 99) * days;
  const conciergeServiceFee = 150;
  const total = rentalSubtotal + insuranceFee + conciergeServiceFee;

  return {
    days,
    pricePerDay,
    rentalSubtotal,
    insuranceTier: insurance,
    insuranceFee,
    conciergeServiceFee,
    total,
  };
}

/**
 * Creates a simulated luxury booking request.
 * @param {Object} bookingData
 * @returns {Promise<Object>}
 */
export async function createBookingRequest(bookingData) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        success: true,
        confirmationNumber: `DE-${Date.now().toString(36).toUpperCase()}`,
        booking: {
          ...bookingData,
          createdAt: new Date().toISOString(),
          status: 'Confirmed - VIP Concierge Assigned',
        },
      });
    }, 400);
  });
}
