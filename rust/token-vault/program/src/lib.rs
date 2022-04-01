//! A Token Fraction program for the safecoin blockchain.

pub mod entrypoint;
pub mod error;
pub mod instruction;
pub mod processor;
pub mod state;
pub mod utils;
// Export current sdk types for downstream users building with a different sdk version
pub use safecoin_program;

safecoin_program::declare_id!("C8M5uDsTwnTVeZFTcPCkPtF81rg2UgyGBVAoKXnAJB9D");
