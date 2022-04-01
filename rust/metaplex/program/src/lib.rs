//! A Token Fraction program for the safecoin blockchain.

pub mod deprecated_state;
pub mod entrypoint;
pub mod error;
pub mod instruction;
pub mod processor;
pub mod state;
pub mod utils;
// Export current sdk types for downstream users building with a different sdk version
pub use safecoin_program;

safecoin_program::declare_id!("314JQqufYJpSJQ8fyqb1zGmbko1m18W7QFQzk51Dbm37");
